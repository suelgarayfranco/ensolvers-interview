package com.tasksmanager.app.service;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.entities.Task;
import com.tasksmanager.app.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Task> findByFolderId(Long id) {
        return taskRepository.findByFolderId(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Task> findByIdAndFolderId(Long id, Long folderId) {
        return taskRepository.findByIdAndFolderId(id,folderId);
    }

    @Override
    @Transactional
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}
