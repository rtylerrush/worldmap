# World Map Angular Application

## Overview

This project is an Angular application that presents an interactive world map using Scalable Vector Graphics (SVG). Each country on the map is highlighted upon mouse events, and detailed information about each country is retrieved from the World Bank API.


## Project Details

This project demonstrates the use of Angular to enhance website functionality with JavaScript and integrates with the World Bank API to provide detailed country information. The application includes an SVG world map component and an Angular service to fetch data from the API.

## Features

- **Interactive SVG Map:** Highlight countries on hover and click events.
- **Country Information:** Display information such as country name, capital, region, income level, and two additional properties.
- **Angular Routing:** Redirects from the default URL to a custom route.
- **Responsive Layout:** Two-column layout for the map and country information.

## Configuration

- **Angular Version:** Developed with Angular version: 17.3.12

## Project Structure

- **src/**: Contains application source code
- **tsconfig.app.json**
- **tsconfig.json**
- **tsconfig.spec.json**
- **angular.json**
- **package.json**
- **package-lock.json**
- **README.md**
- **SVG/**: Contains the SVG file for the world map

## API Integration

- **World Bank API:** Provides country data including name, capital, region, income level, and additional properties.

## Routing Configuration

- The root component redirects to `/map` by default.

## HTML Layout

- **Two Columns:**
  - **Column 1:** Displays the SVG world map.
  - **Column 2:** Shows detailed country information retrieved from the API.

## Event Binding

- **SVG Map Component:** Interactive component with mouse event handlers to highlight countries and fetch data.

## API Service

- **Country Data Service:**
  - Method to fetch additional information using a two-letter country code.
  - Method to update the UI with selected country details.

