package com.simpletodos.todoapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simpletodos.todoapp.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}