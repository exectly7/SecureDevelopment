# syntax=docker/dockerfile:1
FROM eclipse-temurin:21-jdk-jammy AS build
WORKDIR /workspace

COPY src/dedus/gradlew src/dedus/build.gradle src/dedus/settings.gradle ./
COPY src/dedus/gradle ./gradle
RUN chmod +x gradlew
COPY src/dedus/src ./src
RUN --mount=type=cache,target=/root/.gradle ./gradlew --no-daemon bootJar \
    && cp build/libs/*.jar /workspace/app.jar

FROM eclipse-temurin:21-jre-jammy AS runtime
RUN groupadd --gid 10001 app \
    && useradd --uid 10001 --gid app --no-create-home app
WORKDIR /app
COPY --from=build --chown=app:app /workspace/app.jar app.jar
USER app
EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=5s --start-period=60s --retries=6 \
    CMD ["bash", "-c", "exec 3<>/dev/tcp/127.0.0.1/8080"]
ENTRYPOINT ["java", "-jar", "app.jar"]
