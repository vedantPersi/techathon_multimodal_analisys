package com.technothon.multimodel.helper;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.technothon.multimodel.entity.Mutationgraph;
import com.technothon.multimodel.entity.Patient;
import com.technothon.multimodel.services.PatientServiceImpl;

@Service
public class ExcelConversion {


	@Autowired
	PatientServiceImpl patientServiceImpl;
	 public boolean excelToDb(MultipartFile file) throws IOException {
		  FileInputStream inputStream = (FileInputStream) file.getInputStream();
		  System.out.println(file);
//			XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
//				XSSFSheet sheet = workbook.getSheet("Sheet1");
//
//				int rownumber = 0;
//				Iterator<Row> iterator = sheet.iterator();
//
//				while (iterator.hasNext()) {
//					
//					Row row = iterator.next();
//							System.out.println(row);
//					
//				}
		
		 return true;
	 }
	 
	 
	 
	   public static List<Mutationgraph> readExcelFile(InputStream is) throws IOException {
	        Workbook workbook = new XSSFWorkbook(is);
	        Sheet sheet = workbook.getSheetAt(0);
	        Iterator<Row> rows = sheet.iterator();

	        List<Mutationgraph> mutationgraphList = new ArrayList<>();

	        int rowNumber = 0;
	        while (rows.hasNext()) {
	            Row currentRow = rows.next();

	            // Skip header row
	            if (rowNumber == 0) {
	                rowNumber++;
	                continue;
	            }

	            Iterator<Cell> cellsInRow = currentRow.iterator();

	            Mutationgraph mutationgraph = new Mutationgraph();

	            int cellIndex = 0;
	            while (cellsInRow.hasNext()) {
	                Cell currentCell = cellsInRow.next();
	                if (cellIndex == 0) { // Date
	                	if (currentCell.getCellType() == CellType.NUMERIC) {
	                	    mutationgraph.setDate(currentCell.getDateCellValue());
	                	} else {
	                	    mutationgraph.setDate(new Date(currentCell.getStringCellValue()));
	                	}
	                }else
	                if (cellIndex == 1) { // Age
	                	mutationgraph.setAge((int) currentCell.getNumericCellValue());
	 	                }else
	 	                   if (cellIndex == 2) { // Smoking Status
		 	                	mutationgraph.setSmokingStatus(currentCell.getStringCellValue());
		 	                }else
		 	                   if (cellIndex == 3) { // Cancer Stage
		 	                	 	mutationgraph.setCancerStage(currentCell.getStringCellValue());
			 	                }else
	                if (cellIndex == 4) { // mutation count
	                	mutationgraph.setMutationCount((int) currentCell.getNumericCellValue());
	                } else if (cellIndex == 5) { // KRAS mutation count
	                	mutationgraph.setKrasMutationCount((int) currentCell.getNumericCellValue());
	                } else if (cellIndex == 6) { // EGFR mutation count
	                	mutationgraph.setEgfrMutationCount((int) currentCell.getNumericCellValue());
	                }  
	                //TP53 Mutation Count
	                else if (cellIndex == 7) { 
	                	mutationgraph.setTp53MutationCount((int) currentCell.getNumericCellValue());
	                }  
	                else if (cellIndex == 8) { // ALK Fusion Status
	                	mutationgraph.setAlkFusionStatus(currentCell.getStringCellValue());
	                }  
	                else if (cellIndex == 9) { // ROS1 Fusion Status
	                	mutationgraph.setRos1FusionStatus(currentCell.getStringCellValue());
	                }  
	                else if (cellIndex == 10) { // Treatment
	                	mutationgraph.setTreatment(currentCell.getStringCellValue());
	                }  
	                else if (cellIndex == 11) { // Response
	                	mutationgraph.setResponse(currentCell.getStringCellValue());
	                } 
	                cellIndex++;
	            }

	            mutationgraphList.add(mutationgraph);
	        }

	        workbook.close();

	        return mutationgraphList;
	    }
}
