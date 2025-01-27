function calculateArea() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    
    if (isNaN(length) || isNaN(width)) {
      document.getElementById("area-result").textContent = "Please enter valid numbers!";
      return;
    }
    
    const area = length * width;
    
    document.getElementById("area-result").textContent = "Area: " + area + " square units";
  }
  
  let globalVar = "I am a global variable";
  
  function demonstrateScope() {
    let localVar = "I am a local variable"; 
    console.log(globalVar); 
    console.log(localVar); 
  
    document.getElementById("scope-result").textContent = `Global: ${globalVar}, Local: ${localVar}`;
  }
  
  function toggleModal() {
    const modal = document.getElementById("modal");
  
    modal.classList.toggle("hidden");
  
    if (!modal.classList.contains("hidden")) {
      modal.style.animation = "fadeIn 0.5s ease-in";
    } else {
      modal.style.animation = "fadeOut 0.5s ease-out";
    }
  }
  
  