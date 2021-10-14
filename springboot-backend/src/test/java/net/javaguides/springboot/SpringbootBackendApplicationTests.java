package net.javaguides.springboot;



import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.mindtree.employeemanagerapp.model.Employee;
import com.mindtree.employeemanagerapp.repository.EmployeeRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureTestDatabase(replace = NONE)
class SpringbootBackendApplicationTests {
		
	@MockBean
	private EmployeeRepository employeeRepository;

		@Test
		public void getListOfEmployees() {
			List<Employee> employees = employeeRepository.findAll();
			 assertThat(employees.size()).isGreaterThan(-1);
			 if(employees.size() >= 0) {
				 System.out.println("Getting employyes ");
			 }
			 else {
				 System.out.println("Some error retrieving employees");
			 }
		}
	
		@Test 
		void saveEmployee() {
			Employee employee = new Employee("test","test","test@gmail.com");
			Employee employeeReturned = employeeRepository.save(employee);
			
			
		}
    	
		@Test 
		void deleteEmployee(){
			employeeRepository.deleteById(1L);
			if(employeeRepository.findById(1L).isPresent()) {
				System.out.println("Employee not deleted");
			}
			else {
				System.out.println("Employee deleted ");
			}
		}
		
		@Test
		void updateEmployee() {
			Employee employee = new Employee("test","test","test@gmail.com");
			Employee employeeReturned = employeeRepository.save(employee);
			employee.setEmailId("Testing2@gmail.com");
			assertEquals(employee.getEmailId(),"Testing2@gmail.com");
		}
			
	}
