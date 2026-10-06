# Вклад участников

## Участники

| Код | GitHub |
|---|---|
| M1 | [exectly7](https://github.com/exectly7) |
| M2 | [lixovian](https://github.com/lixovian) |
| M3 | [ivch1717](https://github.com/ivch1717) |

## M1

| Результат | Конкретный вклад | Подтверждение |
|---|---|---|
| Требования SR-AUTH-01–07 | Сформулировал требования к подтверждению и уникальности почты, выдаче служебных ролей, доступу к своим заявкам, разделению полномочий, входу и отзыву доступа. Добавил критерии приёмки, обоснования и реестр требований. | Исходный коммит [bdf867a](https://github.com/exectly7/SecureDevelopment/commit/bdf867a8d25583ffb81330f12247bfa3140fa147), включение в `main`: [PR #4](https://github.com/exectly7/SecureDevelopment/pull/4). |
| Проектные решения D-01 и D-02 | Описал получение актуальных прав из БД при каждом запросе и проверку принадлежности заявки пользователю. Связал решения с T-03/T-04 и требованиями, задал будущие проверки отказа в доступе. | [1a6550b](https://github.com/exectly7/SecureDevelopment/commit/1a6550b912dfb7879765cef9532a24544518ca4d), включение в `main`: [PR #10](https://github.com/exectly7/SecureDevelopment/pull/10). |
| Серверная основа и регистрация | Создал Spring Boot-проект с Gradle Wrapper, сущность пользователя и JPA-репозиторий. Написал регистрацию с проверкой занятости email, хешированием пароля через BCrypt и выдачей JWT. | [c6c5a4d](https://github.com/exectly7/SecureDevelopment/commit/c6c5a4dbc907e0071df550b233b0ff13b0f57e58), ветка `feat/starter`, пока не включено в `main`. |

## M2

| Результат | Конкретный вклад | Подтверждение |
|---|---|---|
| Требования SR-CLIENT-01–12 | Описал доступ к реестру клиентов, создание и привязку заявок, согласованное сохранение данных, ограничения на исправление данных приёма, защиту от перебора заявок, согласие с актуальными условиями, повтор решения, отмену и уведомления. Для требований добавил критерии приёмки и обоснования. | Исходный коммит [84558f3](https://github.com/exectly7/SecureDevelopment/commit/84558f3a0a5108cc1b055e56a2bf8e35acc0b45c), включение в `main`: [PR #6](https://github.com/exectly7/SecureDevelopment/pull/6). |
| Угрозы T-01–T-10 | Подготовил десять сценариев с последствиями, точками входа, связями с SR и обоснованиями приоритетов. Для доступа к фотографиям в T-10 отметил отсутствие подходящего требования. Уточнил T-01: регистрация на чужую почту со своим паролем и использование аккаунта до подтверждения адреса. | [9c28850](https://github.com/exectly7/SecureDevelopment/commit/9c288503dd3413e6f858cfdc8a6dd4d0b9d94abb); материалы включены в `main` через [PR #11](https://github.com/exectly7/SecureDevelopment/pull/11) и [PR #8](https://github.com/exectly7/SecureDevelopment/pull/8). Уточнение T-01: [PR #13](https://github.com/exectly7/SecureDevelopment/pull/13), включено в `main`. |
| Архитектурная диаграмма | Подготовил схему с ролями, обработкой заявок, диагностикой, хранилищами и отправкой писем. Сохранил исходник Draw.io и PNG, добавил их в модель угроз. В следующей версии разделил регистрацию, подтверждение почты, вход и смену пароля, обозначил передачу паролей и их хешей. | [7cf6c99](https://github.com/exectly7/SecureDevelopment/commit/7cf6c99648ae7930573b7382662f78b6d60859f5), включение в `main`: [PR #11](https://github.com/exectly7/SecureDevelopment/pull/11). Обновление: [f0cab59](https://github.com/exectly7/SecureDevelopment/commit/f0cab59ae8bba34e67847be6220cb9940edc1ee5), включено в `main` через [PR #12](https://github.com/exectly7/SecureDevelopment/pull/12). |
| Проектные решения D-06/D-07 и общий реестр | Описал подтверждение почты и централизованную авторизацию служебных операций, добавил будущие проверки. Составил реестр D-01–D-07 со связями на угрозы. Позже привёл D-06, требования аутентификации и паспорт к регистрации с подтверждением почты и последующему входу по паролю. | Решения: [ea1d448](https://github.com/exectly7/SecureDevelopment/commit/ea1d4483dcbbb68defe8daa95538c21c77d074cb). Реестр: [833bf3b](https://github.com/exectly7/SecureDevelopment/commit/833bf3be1b30782ec1a016205e74224d9db847e0). Включение в `main`: [PR #10](https://github.com/exectly7/SecureDevelopment/pull/10). Обновление D-06 и связанных документов: [PR #14](https://github.com/exectly7/SecureDevelopment/pull/14), включено в `main`. |
| Настройка приложения и проверка входных данных | Вынес параметры PostgreSQL и JWT в переменные окружения, добавил `.env.example`, исправил чтение ключа JWT. Настроил JSON-ответ регистрации, проверку формата email и длины пароля. Настроил доступ к регистрации без сессии и запрет остальных запросов в текущей серверной основе. | [a52d793](https://github.com/exectly7/SecureDevelopment/commit/a52d793b3c94d0f016ad9c37ffefb929ea688261), [8257395](https://github.com/exectly7/SecureDevelopment/commit/8257395f8fc4d65ec999eb7661f86566b150616d), [72a5da1](https://github.com/exectly7/SecureDevelopment/commit/72a5da1d3ac194406b6d0e4a093af9b40aff20c2), [d481352](https://github.com/exectly7/SecureDevelopment/commit/d48135224d1f70ee9773047394ac0c8fe2b22568), ветка `feat/starter`, пока не включено в `main`. |

## M3

| Результат | Конкретный вклад | Подтверждение |
|---|---|---|
| Требования SR-REPAIR-01–09 | Сформулировал права инженера на диагностику и условия ремонта, доступ клиента к своим заявкам, правила согласия и отказа, запрет изменения подтверждённых условий и допустимые переходы состояний. Добавил критерии приёмки, обоснования и приоритеты. | Исходный коммит [ef9a1be](https://github.com/exectly7/SecureDevelopment/commit/ef9a1bebcc72bc91e65c8e8f48b4ed811a9fc22c), включение в `main`: [PR #5](https://github.com/exectly7/SecureDevelopment/pull/5). |
| Проектные решения D-03–D-05 | Подготовил решения о создании заявки одной транзакцией, согласии на конкретную версию условий и отправке уведомлений. Описал ограничения механизмов и будущие проверки отката, одновременных запросов, повторов и отказа SMTP. | [18b6439](https://github.com/exectly7/SecureDevelopment/commit/18b6439f47dbfa459e7bfe93247f725841374f28), включение в `main`: [PR #10](https://github.com/exectly7/SecureDevelopment/pull/10). |
| Учёт вклада участников | Подготовил CONTRIBUTIONS.md: сопоставил результаты M1–M3 с историей коммитов и PR, добавил ссылки на подтверждения и описание совместной работы над паспортом. Обновил файл после новых изменений команды. | [bcb77f4](https://github.com/exectly7/SecureDevelopment/commit/bcb77f4b16bb6113b154f42fd002432167b78b97); последующие дополнения — текущая версия [CONTRIBUTIONS.md](CONTRIBUTIONS.md). |
| Запуск приложения в Docker | Создал и настроил Dockerfile, Docker Compose и `.dockerignore`. Настроил сборку Java-приложения, запуск от отдельного пользователя, PostgreSQL с постоянным томом, проверки готовности и передачу настроек через переменные окружения. Проверил сборку, регистрацию с выдачей JWT и сохранение данных после пересоздания контейнеров. | [19c839b](https://github.com/exectly7/SecureDevelopment/commit/19c839b73eebbf7b0bd9483254038a5531c74a2a), ветка `feat/starter`, пока не включено в `main`. |

## Совместная работа

- **Паспорт проекта — M1, M2 и M3.** Совместно разработали паспорт на семинаре: определили назначение и границы продукта, роли пользователей, основные сценарии, значимые данные, компоненты и план первой версии. Результат оформлен в `PROJECT.md` и сохранён в [PR #3](https://github.com/exectly7/SecureDevelopment/pull/3), коммит [fe31f21](https://github.com/exectly7/SecureDevelopment/commit/fe31f2134287448a3f60339201191b5021719c92).
