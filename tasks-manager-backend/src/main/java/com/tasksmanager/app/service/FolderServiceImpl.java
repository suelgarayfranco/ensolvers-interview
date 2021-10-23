package com.tasksmanager.app.service;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.entities.Task;
import com.tasksmanager.app.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class FolderServiceImpl implements FolderService{

    @Autowired
    private FolderRepository folderRepository;
    @Autowired
    private TaskService taskService;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Folder> findAll() {
        return folderRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Folder> findById(Long id) {
        return folderRepository.findById(id);
    }

    @Override
    @Transactional
    public Folder save(Folder folder) {
        return folderRepository.save(folder);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        folderRepository.deleteById(id);
    }

   /* public Folder addTaskToFolder(Long folderId, Long taskId){
        Optional<Folder> folder = findById(folderId);
        Optional<Task> task = taskService.findById(taskId);
        task.get().setFolder(folder.get());
        folder.get().addTask(task.get());

        return folder.get();
    }

    public Folder removeTaskFromFolder(Long folderId, Long taskId){
        Optional<Folder> folder = findById(folderId);
        Optional<Task> task = taskService.findById(taskId);
        folder.get().removeTask(task.get());

        return folder.get();
    }*/
}
