package com.technothon.multimodel.helper;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
}
