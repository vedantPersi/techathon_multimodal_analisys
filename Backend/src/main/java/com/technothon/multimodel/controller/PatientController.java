package com.technothon.multimodel.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.technothon.multimodel.entity.MultiBarGraph;
import com.technothon.multimodel.entity.Mutationgraph;
import com.technothon.multimodel.entity.Patient;
import com.technothon.multimodel.entity.PatientDashboard;
import com.technothon.multimodel.helper.ExcelConversion;
import com.technothon.multimodel.services.MutationgraphImpl;
import com.technothon.multimodel.services.PatientServiceImpl;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

	@Autowired
	PatientServiceImpl patientServiceImpl;
	@Autowired
	MutationgraphImpl mutationgraphImpl;
	@Autowired
	ExcelConversion excelConversion;
	
	 @PostMapping(value = "/upload")
	  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
	    String message = "";

//	    if (Helper.hasExcelFormat(file)) {
	      
	    		excelConversion.excelToDb(file);
	        message= "Uploaded the file successfully: " + file.getOriginalFilename();
	        return ResponseEntity.status(HttpStatus.OK).body("new ResponseMessage(message)");
//	      }
//	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
	     
	  }
	 @PostMapping(value = "/create")
	 public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
	 patientServiceImpl.save(patient);
	 return ResponseEntity.status(HttpStatus.OK).body("Success");
	 }
	 
	
	 @GetMapping("/radiology/{patientId}")
	
	    public ResponseEntity<byte[]> getPatientImages(@PathVariable String patientId) {
	        String folderPath = "C:\\Users\\tanmay_gunjal\\Downloads\\db\\" + patientId;
	        File folder = new File(folderPath);

	        if (!folder.exists() || !folder.isDirectory()) {
	            return ResponseEntity.notFound().build();
	        }

	        List<File> imageFiles = new ArrayList<>();
	        collectImageFiles(folder, imageFiles);

	        if (imageFiles.isEmpty()) {
	            return ResponseEntity.notFound().build();
	        } else {
	            byte[] combinedImageData = combineImageFiles(imageFiles);
	            return ResponseEntity.ok()
	                    .contentType(MediaType.IMAGE_JPEG)
	                    .body(combinedImageData);
	        }
	    }

	    private void collectImageFiles(File folder, List<File> imageFiles) {
	        for (File file : folder.listFiles()) {
	            if (file.isDirectory()) {
	                collectImageFiles(file, imageFiles);
	            } else if (file.isFile() && file.getName().endsWith(".dcm")) {
	                imageFiles.add(file);
	            }
	        }
	    }

	    private byte[] combineImageFiles(List<File> imageFiles) {
	        ByteArrayOutputStream output = new ByteArrayOutputStream();
	        byte[] buffer = new byte[1024];
	        int bytesRead;
	        for (File file : imageFiles) {
	            try (FileInputStream input = new FileInputStream(file)) {
	                while ((bytesRead = input.read(buffer)) != -1) {
	                    output.write(buffer, 0, bytesRead);
	                }
	            } catch (IOException e) {
	                // Log the exception, but continue processing the rest of the files
	                e.printStackTrace();
	            }
	        }
	        return output.toByteArray();
	    }
	 @GetMapping(value = "/get")
	 public ResponseEntity<List<PatientDashboard>> getRecords() {
		 List<Patient> patientList = patientServiceImpl.findAll();
	 List<PatientDashboard> patientDashboardList = new ArrayList<>();
	 
	  for(Patient p : patientList) 
		  patientDashboardList.add(new PatientDashboard(p.getId(), p.getAge(), p.getWeight(), p.getSurvivalStatus(), p.getName(), p.getGender()));
		  
	 
	  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(patientDashboardList);
	 
	 }
	 
	 
	 @GetMapping(value = "/getPatientMutation")
	 public ResponseEntity<List<Mutationgraph>> getPatientMutation() {
		 return ResponseEntity.status(HttpStatus.OK).body(mutationgraphImpl.findAll());
		
		 
	 }
	 
	 @PostMapping(value ="/uploadmutation")
	    public ResponseEntity<?> uploadGenericData(@RequestParam("file") MultipartFile file) {
	        if (file.isEmpty()) {
	        	 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
	        }
	        
	        try {
	            // Read data from the Excel file
	            List<Mutationgraph> patients = ExcelConversion.readExcelFile(file.getInputStream());

	            // Save data to the database
	            mutationgraphImpl.saveAll(patients);

	            return ResponseEntity.status(HttpStatus.OK).body("Data has been uploaded successfully!");
	        } catch (IOException e) {
	        	 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file");
	        }
	    }
	 
	 
	 
	 @GetMapping(value = "/getMultiBarGraph")
	 public ResponseEntity<MultiBarGraph> getGraph() {

		  
		 return ResponseEntity.status(HttpStatus.OK).body(mutationgraphImpl.findAllByColumn());
		 
		
		 
		 
	 }
	
}
