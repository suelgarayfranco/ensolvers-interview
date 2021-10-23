package com.tasksmanager.app.controllers;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping(path = "api/folders")
@CrossOrigin("http://localhost:3000")
public class FolderController {

    @Autowired
    private FolderService folderService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Folder folder){
        return ResponseEntity.status(HttpStatus.CREATED).body(folderService.save(folder));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        Optional<Folder> oFolder = folderService.findById(id);
        if (oFolder.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(oFolder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Folder> oFolder = folderService.findById(id);
        if (oFolder.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        folderService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping()
    public List<Folder> getAll(){
        List<Folder> folders = StreamSupport
                .stream(folderService.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return folders;
    }

}
