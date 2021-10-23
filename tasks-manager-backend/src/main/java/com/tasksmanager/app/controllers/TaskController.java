package com.tasksmanager.app.controllers;

import com.tasksmanager.app.entities.Folder;
import com.tasksmanager.app.entities.Task;
import com.tasksmanager.app.service.FolderService;
import com.tasksmanager.app.service.TaskService;
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
public class TaskController {

    @Autowired
    private TaskService taskService;
    @Autowired
    private FolderService folderService;

    @PostMapping("/{folderId}/tasks")
    public ResponseEntity<?> create(@PathVariable Long folderId, @RequestBody Task task){
        Optional<Folder> folder = folderService.findById(folderId);
        if(folder.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        task.setFolder(folder.get());
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(task));
    }

    @GetMapping("/{folderId}/tasks/{id}")
    public ResponseEntity<?> get(@PathVariable Long folderId, @PathVariable Long id) {
        Optional<Folder> folder = folderService.findById(folderId);
        if(folder.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Optional<Task> oTask = taskService.findById(id);
        if (oTask.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(oTask);
    }

    @DeleteMapping("/{folderId}/tasks/{id}")
    public ResponseEntity<?> delete(@PathVariable Long folderId, @PathVariable Long id){
        Optional<Folder> folder = folderService.findById(folderId);
        if(folder.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Optional<Task> oTask = taskService.findByIdAndFolderId(id,folderId);
        if (oTask.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        taskService.deleteById(id);
        return ResponseEntity.ok().build();
    }

   @PutMapping("/{folderId}/tasks/{id}")
    public ResponseEntity<?> update(@RequestBody Task taskData,@PathVariable Long folderId, @PathVariable Long id){
       Optional<Folder> folder = folderService.findById(folderId);
       if(folder.isEmpty()){
           return ResponseEntity.notFound().build();
       }
        Optional<Task> oTask = taskService.findById(id);
        if(oTask.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        oTask.get().setText(taskData.getText());
        oTask.get().setChecked(taskData.isChecked());
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(oTask.get()));
    }

    @GetMapping("/{folderId}/tasks")
    public ResponseEntity<?> getAll(@PathVariable Long folderId){
        Optional<Folder> folder = folderService.findById(folderId);
        if(folder.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        List<Task> tasks = StreamSupport
                .stream(taskService.findByFolderId(folderId).spliterator(), false)
                .collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.CREATED).body(tasks);
    }
}
