package com.tasksmanager.app.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "folders")
public class Folder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;

    /*@OneToMany(
            mappedBy = "folder",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    //@JoinColumn( name = "id_folder", referencedColumnName = "id")
    private List<Task> tasks = new ArrayList<>();*/

    public Folder(){
    }

    public Folder(String name){
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /*public List<Task> getTasks() {
        return tasks;
    }
    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
    public void addTask(Task task){
        tasks.add(task);
    }
    public void removeTask(Task task){
        tasks.remove(task);
    }*/
}
