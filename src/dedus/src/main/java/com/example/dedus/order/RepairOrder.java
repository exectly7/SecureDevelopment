package com.example.dedus.order;

import com.example.dedus.device.Device;
import com.example.dedus.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "repair_orders")
public class RepairOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private User client;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private Device device;

    @NotNull
    @Column(name = "repair_status")
    @Enumerated(value = EnumType.STRING)
    private RepairStatus repairStatus;

    private String description;

    public int getId() {
        return id;
    }

    public User getClient() {
        return client;
    }

    public Device getDevice() {
        return device;
    }

    public RepairStatus getRepairStatus() {
        return repairStatus;
    }

    public String getDescription() {
        return description;
    }
}
