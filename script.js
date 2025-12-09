 function score() {
        let score = 0;

         // True/False 1
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === "true") score++;

        // True/False 2
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "false") score++; 

        // MCQ 2
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "megaknight") score++;

        // MCQ 1
        const q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "15000") score++;

        // Math question
        const q5 = document.querySelector('#q5').value;
        if (parseInt(q5) === 7600) score++;

        // Color picker 
        const q6 = document.querySelector('#q6').value.toLowerCase();
        if (q6 === "rgb(0,0,255)") score++;

        // String question
        const q7 = document.querySelector('#q7').value.trim().toLowerCase();
        if (q7 === "woman") score++;
        

       

        document.querySelector('#result').textContent = 
            "You scored " + score + " out of 7!";
    }

    // Submit button handler
    document.querySelector('#submitBtn').addEventListener('click', score);