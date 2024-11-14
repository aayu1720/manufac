# Crop Production Data Visualization

This project provides a React-based frontend for visualizing crop production data. It includes tables displaying key metrics like production yield, minimum/maximum production values, and cultivation areas. 

## Components
- **CropProduction.tsx**: Renders a table for each year's crop data, including maximum and minimum production details.
- **YieldandCultivation.tsx**: Shows a table of crops with their average yield and cultivation areas.
- **CropProduction.scss**: Contains styling for the table layout, including headers and rows, with specific styles for each data column.
- **YieldandCultivation.scss**: Contains styling for the table layout, including headers and rows, with specific styles for each data column.

### Features
- Dynamic table generation based on data
- Styled headers and rows with hover effects
- Scrollable table body

## CropProduction.tsx

`CropProduction.tsx` is a React component that renders a table of crop production data. The table includes:

- **Country**: The country where the crop is produced.
- **Year**: The year of production data.
- **CropName**: Name of the crop.
- **CropProduction**: The production quantity.
- **YieldOfCrops**: Yield data for the crop.
- **AreaUnderCultivation**: The area cultivated for this crop.

## YieldandCultivation.tsx

The `YieldandCultivation.tsx` component displays average data for crop yield and cultivation areas, using a simple table layout.


## Preview

![Crop Production Table Preview](manufac\public\image\cropProduction.png)

![YieldandCultivation Table Preview](manufac\public\image\YieldandCultivation.png)


## Usage

To run the project locally:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the project: `npm run dev`.
