package com.tasksmanager.app.service;


import com.tasksmanager.app.entities.Folder;

import java.util.Optional;

public interface FolderService {

        public Iterable<Folder> findAll();

        public Optional<Folder> findById(Long id);

        public Folder save(Folder folder);

        public void deleteById(Long id);

}
