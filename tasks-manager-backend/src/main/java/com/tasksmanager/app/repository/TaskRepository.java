package com.tasksmanager.app.repository;

import com.tasksmanager.app.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByFolderId(Long folderId);
    Optional<Task> findByIdAndFolderId(Long id, Long folderId);
}
