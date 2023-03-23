package com.technothon.multimodel.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technothon.multimodel.dao.MutationgraphRepository;
import com.technothon.multimodel.entity.MultiBarGraph;
import com.technothon.multimodel.entity.Mutationgraph;


@Service
public class MutationgraphImpl implements MutationgraphService {


	  @Autowired
	  MutationgraphRepository mutationgraphRepository;
		@Override
		public List<Mutationgraph> findAll() {
			// TODO Auto-generated method stub
			return mutationgraphRepository.findAll();
		}

		@Override
		public Optional<com.technothon.multimodel.entity.Mutationgraph> findById(int id) {
			// TODO Auto-generated method stub
			return mutationgraphRepository.findById(id);
		}

		@Override
		public void save(Mutationgraph mutationgraph) {
			// TODO Auto-generated method stub
			mutationgraphRepository.save(mutationgraph);

		}

		@Override
		public void deleteById(int caseId) {
			// TODO Auto-generated method stub
			mutationgraphRepository.deleteById(caseId);

		}

		@Override
		public void saveAll(List<Mutationgraph> mutationgraph) {
			// TODO Auto-generated method stub
			mutationgraphRepository.saveAll(mutationgraph);

		}

		@Override
		public MultiBarGraph findAllByColumn() {
			// TODO Auto-generated method stub
			MultiBarGraph multiBarGraph =  new MultiBarGraph();
			List<Mutationgraph> mutation= mutationgraphRepository.findAll();

			 List<Integer> id = new ArrayList<>();
		     List<Date> date = new ArrayList<>();;
		     List<Integer> age = new ArrayList<>();;
		     List<String> smokingStatus = new ArrayList<>();;
		     List<String> cancerStage = new ArrayList<>();;
		     List<Integer> mutationCount = new ArrayList<>();;
		     List<Integer> krasMutationCount = new ArrayList<>();;
		     List<Integer> egfrMutationCount = new ArrayList<>();;
		     List<Integer> tp53MutationCount = new ArrayList<>();;
		     List<String> alkFusionStatus = new ArrayList<>();;
		     List<String> ros1FusionStatus = new ArrayList<>();;
		     List<String> treatment = new ArrayList<>();;
		     List<String> response = new ArrayList<>();;
		    
				for(Mutationgraph m :mutation) {
					
					id.add(m.getId());
				}
				for(Mutationgraph m :mutation) {
					
					date.add(m.getDate());
				}
				for(Mutationgraph m :mutation) {
					
					age.add(m.getAge());
				}
				for(Mutationgraph m :mutation) {
					
					smokingStatus.add(m.getSmokingStatus());
				}
				for(Mutationgraph m :mutation) {
					
					cancerStage.add(m.getCancerStage());
				}
				for(Mutationgraph m :mutation) {
					
					mutationCount.add(m.getMutationCount());
				}
				for(Mutationgraph m :mutation) {
					
					krasMutationCount.add(m.getKrasMutationCount());
				}
				for(Mutationgraph m :mutation) {
					
					egfrMutationCount.add(m.getEgfrMutationCount());
				}
				for(Mutationgraph m :mutation) {
					
					tp53MutationCount.add(m.getTp53MutationCount());
				}
				for(Mutationgraph m :mutation) {
					
					alkFusionStatus.add(m.getAlkFusionStatus());
				}
				for(Mutationgraph m :mutation) {
					
					ros1FusionStatus.add(m.getRos1FusionStatus());
				}
				for(Mutationgraph m :mutation) {
					
					treatment.add(m.getTreatment());
				}
				for(Mutationgraph m :mutation) {
					
					response.add(m.getResponse());
				}
				
				multiBarGraph.setAge(age);

				multiBarGraph.setId(id);

				multiBarGraph.setDate(date);

				multiBarGraph.setSmokingStatus(smokingStatus);

				multiBarGraph.setCancerStage(cancerStage);

				multiBarGraph.setMutationCount(mutationCount);

				multiBarGraph.setKrasMutationCount(krasMutationCount);

				multiBarGraph.setEgfrMutationCount(egfrMutationCount);

				multiBarGraph.setAlkFusionStatus(alkFusionStatus);

				multiBarGraph.setRos1FusionStatus(ros1FusionStatus);

				multiBarGraph.setTreatment(treatment);
			
				multiBarGraph.setResponse(response);


			return multiBarGraph;
		}
		
		
		

}
