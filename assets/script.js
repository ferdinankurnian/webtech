document.addEventListener("DOMContentLoaded", function() {
    
    const formID = document.getElementById('splitfield');
    const cardGroup = document.getElementById('card-group');

    formID.addEventListener('submit', function (event) {

        event.preventDefault();

        cardGroup.innerHTML = ""; // Clear existing content

        const xAxis = document.getElementById('xaxis').value;
        const yAxis = document.getElementById('yaxis').value;

        console.log(xAxis);
        console.log(yAxis);

        // go vertical
        for (let j = 1; j <= yAxis; j++) { // Loop over y-axis
            const Yitem = document.createElement("div"); // Create a new row
            Yitem.classList.add("group-row");

            for (let i = 1; i <= xAxis; i++) { // Loop over x-axis
                const Xitem = document.createElement("div");
                Xitem.classList.add("card");

                // Add event listener to change background color to white on click
                Xitem.addEventListener("click", function() {
                    Xitem.classList.add("clicked");
                });

                Yitem.appendChild(Xitem); // Append each new element to the row
            }

            cardGroup.appendChild(Yitem); // Append the row to the container
        }

    });

});
