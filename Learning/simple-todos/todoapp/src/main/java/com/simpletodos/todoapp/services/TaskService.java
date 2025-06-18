package com.simpletodos.todoapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.simpletodos.todoapp.models.Task;
import com.simpletodos.todoapp.repositories.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}