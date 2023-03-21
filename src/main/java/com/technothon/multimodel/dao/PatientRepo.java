package com.technothon.multimodel.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technothon.multimodel.entity.Patient;

public interface PatientRepo extends JpaRepository<Patient, String> {

}
