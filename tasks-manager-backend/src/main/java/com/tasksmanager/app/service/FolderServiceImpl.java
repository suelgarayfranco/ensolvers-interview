package com.tasksmanager.app.service;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class FolderServiceImpl implements FolderService{

    @Autowired
    private FolderRepository folderRepository;

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


}
