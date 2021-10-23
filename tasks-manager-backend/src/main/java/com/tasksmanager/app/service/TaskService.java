package com.tasksmanager.app.service;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.entities.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface TaskService {

    public Iterable<Task> findAll();

    public Optional<Task> findById(Long id);

    public List<Task> findByFolderId(Long id);

    public Optional<Task> findByIdAndFolderId(Long id, Long folderId);

    public Task save(Task task);

    public void deleteById(Long id);

}
