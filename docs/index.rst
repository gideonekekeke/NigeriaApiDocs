.. _index:

****************************************
Nigeria API Documentation
****************************************

.. meta::
    :description: This is the official documentation for the Nigeria API developed by Gideon Ekeke.
    :keywords: Nigeria API, Documentation

.. _dsg-introduction:

Introduction
============

This documentation provides details on how to use the Nigeria API, developed by Gideon Ekeke.
The API allows developers to access information about Nigerian states, regions, and subregions.
We provide examples, including API endpoints and their expected responses, for both visual and technical reference.

The source code of this API is located in its `project repository on GitHub <https://github.com/gideonekekeke/NigeriaApiDocs>`_.

If you want to use another programming language to consume this API, follow the examples provided below.

.. _dsg-installation:

Installation
============

To use the Nigeria API in your project, you can follow the installation steps below:

1. Install the required packages:

   - Node.js:
     ```
     npm install nigeria-api-client
     ```

     or

     ```
     yarn add nigeria-api-client
     ```

   - PHP:
     ```
     composer require gideonekeke/nigeria-api-client
     ```

   - C#:
     Install the NigeriaApiClient package from NuGet.

2. Import the Nigeria API client in your code:

   - Node.js:
     ```javascript
     const NigeriaApiClient = require('nigeria-api-client');
     const nigeriaApi = new NigeriaApiClient();
     ```

   - PHP:
     ```php
     use NigeriaApiClient\NigeriaApiClient;

     $nigeriaApi = new NigeriaApiClient();
     ```

   - C#:
     ```csharp
     using NigeriaApiClient;

     var nigeriaApi = new NigeriaApiClient();
     ```

     .. code-block:: code-snippet

   ```python
   # Python
   from nigeria_api_client import NigeriaApiClient

   nigeria_api = NigeriaApiClient()
   state = nigeria_api.get_single_state('Lagos')
   states = nigeria_api.get_states_by_region('South West')

3. Start making requests to the API using the provided methods.

   - Node.js:
     ```javascript
     // Get all states
     nigeriaApi.getAllStates()
       .then(states => console.log(states))
       .catch(error => console.error(error));

     // Get a single state by name
     nigeriaApi.getSingleState('Lagos')
       .then(state => console.log(state))
       .catch(error => console.error(error));

     // Get all states in a specific region
     nigeriaApi.getStatesByRegion('South West')
       .then(states => console.log(states))
       .catch(error => console.error(error));
     ```

   - PHP:
     ```php
     // Get all states
     $states = $nigeriaApi->getAllStates();
     print_r($states);

     // Get a single state by name
     $state = $nigeriaApi->getSingleState('Lagos');
     print_r($state);

     // Get all states in a specific region
     $states = $nigeriaApi->getStatesByRegion('South West');
     print_r($states);
     ```

   - C#:
     ```csharp
     // Get all states
     var states = nigeriaApi.GetAllStates();
     Console.WriteLine(states);

     // Get a single state by name
     var state = nigeriaApi.GetSingleState("Lagos");
     Console.WriteLine(state);

     // Get all states in a specific region
     var states = nigeriaApi.GetStatesByRegion("South West");
     Console.WriteLine(states);
     ```

Replace the code examples with the appropriate usage for your API and programming language.

For more details on the API endpoints and available methods, refer to the API documentation provided below.

.. _dsg-api-documentation:

API Documentation
=================

For detailed information on the Nigeria API, including API endpoints, request parameters, and response formats, refer to the official API documentation:

- `API Documentation <https://nigeria-api-docs.com>`_






