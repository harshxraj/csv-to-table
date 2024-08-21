---

# CSV File Upload and Interactive Table

## Overview

This project provides a React.js frontend that enables users to upload CSV files and display their content in a responsive, interactive table. The table supports features such as pagination, row and column selection, and scrolling, with styling provided by Tailwind CSS.

## Features

- **CSV File Upload**: Upload CSV files using a file input component.
- **Interactive Table**: Display CSV data in a responsive and interactive table.
  - **Pagination**: Navigate through large datasets with pagination controls.
  - **Scrolling**: Horizontal scrolling for tables that extend beyond the screen width.
  - **Row Selection**: Checkboxes for selecting rows for bulk actions.
  - **Column Selection**: Select entire columns by clicking column headers.
- **Table Styling**: Modern and visually appealing design using Tailwind CSS.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/harshxraj/csv-to-table.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd csv-interactive-table
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

1. **Upload a CSV file**:
   - Click on the file input component to upload your CSV file.

2. **View the table**:
   - The table will display the parsed CSV data.
   - Use pagination controls to navigate through pages of data.
   - If the table extends beyond the screen width, use horizontal scrolling at the bottom.

3. **Select rows and columns**:
   - Check the checkboxes to select rows.
   - Click on column headers to select entire columns.


## Development

- **CSS Framework**: Tailwind CSS is used for styling. You can customize the styles as needed.
- **Components**:
  - **FileUpload**: Handles CSV file uploads.
  - **DataTable**: Displays the CSV data in a table with interactive features.
  - **PaginationControls**: Manages pagination of table data.
