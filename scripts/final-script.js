document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subject-form');
    const resultsElement = document.getElementById('results');

    // Mock data for career suggestions based on subjects
    const careerData = {
        "Mathematics, Physics, Chemistry": ["Engineer", "Scientist"],
        "Biology, Chemistry, Physics": ["Doctor", "Biologist"],
        "Shona, Chichewa, English": ["Teacher", "Lawyer"],
        "History, Geography, Divinity": ["Geologist", "Achaelogist"],
        // More subject combinations and their respective careers can be added
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        const subject1 = document.getElementById('subject1').value.trim();
        const subject2 = document.getElementById('subject2').value.trim();
        const subject3 = document.getElementById('subject3').value.trim();
        
        const careerSuggestions = getCareerSuggestions(subject1, subject2, subject3);
        
        displaySuggestions(careerSuggestions);
    });

    function getCareerSuggestions(sub1, sub2, sub3) {
        const key = `${sub1}, ${sub2}, ${sub3}`;
        return careerData[key] || ["No suggestions found for the given subjects."];
    }
    
    function displaySuggestions(suggestions) {
        resultsElement.innerHTML = `<strong>According to the subjects you are currently taking, you could pursue a career as a/an:</strong> ${suggestions.join(', ')}`;
    }
});
