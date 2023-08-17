
function displayFormData(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    // Get form input values
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
  
    // Create a new paragraph element to display form data
    var formDataElement = document.createElement('p');
    formDataElement.textContent = 'Name: ' + name + ', Email: ' + email + ', Password: ' + password;
  
    // Append the form data paragraph to the container
    var formDataContainer = document.getElementById('form-data-container');
    formDataContainer.appendChild(formDataElement);
  
    // Reset the form fields
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  }
  //modal
  function openModal(img) {
      var modal = document.getElementById('modal');
      var modalImg = document.getElementById('modal-img');
    
      modal.style.display = "flex";
      modalImg.src = img.src;
    
      modal.classList.add('modal-open');
      modal.classList.remove('modal-close');
    }
    
    function closeModal() {
      var modal = document.getElementById('modal');
    
      modal.classList.add('modal-close');
      modal.classList.remove('modal-open');
    
      setTimeout(() => {
        modal.style.display = "none";
      }, 600);
    }
    function zoomIn() {
      var paragraph = document.getElementById('zoomed-paragraph');
      var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
      paragraph.style.fontSize = (fontSize + 10) + 'px';
    }
    
    function zoomOut() {
      var paragraph = document.getElementById('zoomed-paragraph');
      var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
      paragraph.style.fontSize = (fontSize - 10) + 'px';
    }
     
    var readMoreLinks = document.querySelectorAll('.read-more-link');
  
  readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      var item = this.parentNode;
      var description = item.querySelector('.item-description');
      var fullDescription = item.querySelector('.item-full-description');
  
      description.style.display = 'none';
      fullDescription.style.display = 'block';
    });
  });
  
  var studentForm = document.getElementById('student-form');
  var studentTable = document.getElementById('student-table');
  var editForm = document.getElementById('edit-form');
  var editNameInput = document.getElementById('edit-name');
  var editAgeInput = document.getElementById('edit-age');
  var editGradeInput = document.getElementById('edit-grade');
  var saveEditBtn = document.getElementById('save-edit-btn');
  var cancelEditBtn = document.getElementById('cancel-edit-btn');
  
  var students = [];
  
  studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('name');
    var ageInput = document.getElementById('age');
    var gradeInput = document.getElementById('grade');
    
    var student = {
      name: nameInput.value,
      age: ageInput.value,
      grade: gradeInput.value
    };
    
    students.push(student);
    
    renderTable();
    
    nameInput.value = '';
    ageInput.value = '';
    gradeInput.value = '';
  });
  
  function renderTable() {
    studentTable.innerHTML = '';
    
    students.forEach(function(student, index) {
      var row = document.createElement('tr');
      var nameCell = document.createElement('td');
      nameCell.textContent = student.name;
      var ageCell = document.createElement('td');
      ageCell.textContent = student.age;
      var gradeCell = document.createElement('td');
      gradeCell.textContent = student.grade;
      var actionsCell = document.createElement('td');
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        deleteStudent(index);
      });
      var editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', function() {
        showEditForm(index);
      });
      
      actionsCell.appendChild(deleteBtn);
      actionsCell.appendChild(editBtn);
      
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(gradeCell);
      row.appendChild(actionsCell);
      
      studentTable.appendChild(row);
    });
  }
  
  function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
  }
  
  function showEditForm(index) {
    var student = students[index];
    
    editNameInput.value = student.name;
    editAgeInput.value = student.age;
    editGradeInput.value = student.grade;
    
    editForm.style.display = 'block';
    
    saveEditBtn.addEventListener('click', function() {
      updateStudent(index);
    });
    
    cancelEditBtn.addEventListener('click', function() {
      editForm.style.display = 'none';
    });
  }
  
  function updateStudent(index) {
    var student = students[index];
    
    student.name = editNameInput.value;
    student.age = editAgeInput.value;
    student.grade = editGradeInput.value;
    
    editForm.style.display = 'none';
    
    renderTable();
  }
  