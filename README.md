#Travels & Tours

Travels & Tours is a web application for booking travel packages. Users can search for packages based on dream locations and price range, book a package, and view their reservation details in a modal. This project uses React and React Bootstrap for the frontend.


##Installation

To get started with this project, follow these steps:

1) Clone the repository:

        git clone https://github.com/your-username/travels-tours.git
        cd travels-tours

2) Install dependencies:

        npm install

3) Start the development server:

        npm start
        The application will be available at http://localhost:3000.


##Usage

1) Search for Packages:
Enter the dream location and price range in the search inputs and click the "Search" button.

2) Book a Package:
Fill in the booking form with your name, email, package name, and date.
Click the "Book Now" button to submit the form.

3) View Reservation:
Click the "Reservations" link in the navigation bar to open the modal and view your reservation details.
Use the "Cancel Reservation" button to delete the reservation, or the "Next: Pay" button (which does not lead anywhere currently).


##Components

- Navigation:
Displays the navigation bar with links.
Shows the reservation modal with details fetched from local storage.

- BookingForm:
Displays the form for booking a package.
Handles form submission and saves data to local storage.

- PackageSection:
Displays the list of available packages.
Implements a scroll animation effect.

- Hero:
Displays the hero section with an image, title, and search form.

- Local Storage:
The reservation details are stored in the browser's local storage. When a user submits the booking form, the data is saved to local storage and retrieved to display in the reservation modal.


*Contributions are welcome! Please follow these steps to contribute:*

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Make your changes and commit them with descriptive messages.
- Push your changes to your forked repository.
- Open a pull request to the main repository.
