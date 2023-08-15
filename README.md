# README

## Belly Button Biodiversity Dashboard

This project visualizes data related to belly button biodiversity. It provides an interactive dashboard that allows users to explore various samples and their associated data.

### Files Included:

1. `app.js` - JavaScript file responsible for data extraction, manipulation, and visualization.
2. `index.html` - The main webpage for the dashboard.
3. `samples.json` - Contains data related to various samples, including names, metadata, and sample measurements.

## File Descriptions:

### 1. `app.js`:

- Fetches data from a JSON source.
- Contains functions to populate and update demographic information based on a given ID.
- Contains functions to create visualizations such as bar charts based on the provided ID.

### 2. `index.html`:

- Main dashboard interface styled with Bootstrap.
- Contains a dropdown menu for selecting different datasets or samples.
- Displays demographic information related to the selected sample.
- Provides placeholders for visualizations.

### 3. `samples.json`:

- **names**: A list of unique identifiers or names.
- **metadata**: Contains additional information for each sample.
- **samples**: Contains the primary data or measurements for each sample.

## How to Use:

1. **Webpage**:
   - Open `index.html` in a web browser.
   - Use the dropdown menu to select a sample.
   - Explore the demographic information and visualizations related to the selected sample.

2. **JavaScript**:
   - The `app.js` file contains all the necessary JavaScript code to fetch, process, and visualize the data. It's linked to the `index.html` file and will run automatically when the webpage is loaded.

3. **Data**:
   - The `samples.json` file provides all the data used in the dashboard. You can explore it directly or use it as a data source for other projects.

## Notes:

- Ensure that all files are in the same directory for the dashboard to function correctly.
- If hosting this dashboard online, ensure CORS (Cross-Origin Resource Sharing) policies allow for data fetching from the specified JSON source.
