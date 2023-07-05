
.. _index:

****************************************
NigeriaState API Documentation
****************************************

.. meta::
    :description: This is the official documentation for the Nigeria API developed by **Gideon Ekeke** (FullStack Engineer)MERN.
    :keywords: NigeriaState API, Documentation

.. _dsg-introduction:

Introduction
============

This documentation provides details on how to use the NigeriaState API, developed by **Gideon Ekeke** (FullStack Engineer)MERN.
The API allows developers to access information about Nigerian states, regions, and subregions.
We provide examples, including API endpoints and their expected responses, for both visual and technical reference.

The source code of this API is located in its `project repository on GitHub <https://github.com/gideonekekeke/NigeriaApiDocs>`_.

If you want to use another programming language to consume this API, copy the following code and paste on chatGPT.


State list
=============

GET /api/v1/nigeria/states
---------------------

Retrieve a list of all the states in Nigeria.


.. code-block:: 

         # Example request in Node.js
         const fetch = require('node-fetch');

         fetch('http://localhost:7000/api/v1/nigeria/states')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))




 Example Response           
.. code-block:: json

    {
    "message": "successfull",
    "resultCount": 37,
    "cost": 0,
    "result": [
        {
            "id": "abia",
            "name": "Abia",
            "region": "South East",
            "capital": "Umuahia",
            "deputy": "Ude Oko Chukwu",
            "governor": "Okezie Ikpeazu",
            "slogan": "God's Own State",
            "subRegion": [
                "Aba North",
                "Aba South",
                "Arochukwu",
                "Bende",
                "Ikwuano",
                "Isiala Ngwa North",
                "Isiala Ngwa South",
                "Isuikwuato",
                "Obi Ngwa",
                "Ohafia",
                "Osisioma",
                "Ugwunagbo",
                "Ukwa East",
                "Ukwa West",
                "Umuahia North",
                "muahia South",
                "Umu Nneochi"
            ]
        },
        {
            "id": "adamawa",
            "name": "Adamawa",
            "region": "North East",
            "capital": "Yola",
            "deputy": "Martin Babale",
            "governor": "Bindo Jibrilla",
            "slogan": "Land Of Beauty, Sunshine And Hospitality",
            "subRegion": [
                "Demsa",
                "Fufure",
                "Ganye",
                "Gayuk",
                "Gombi",
                "Grie",
                "Hong",
                "Jada",
                "Larmurde",
                "Madagali",
                "Maiha",
                "Mayo Belwa",
                "Michika",
                "Mubi North",
                "Mubi South",
                "Numan",
                "Shelleng",
                "Song",
                "Toungo",
                "Yola North",
                "Yola South"
            ]
        },
        {
            "id": "akwa-ibom",
            "name": "Akwa Ibom",
            "region": "South South",
            "capital": "Uyo",
            "deputy": "Moses Frank Ekpo",
            "governor": "Udom Emmanuel",
            "slogan": "Land Of Promise",
            "subRegion": [
                "Abak",
                "Eastern Obolo",
                "Eket",
                "Esit Eket",
                "Essien Udim",
                "Etim Ekpo",
                "Etinan",
                "Ibeno",
                "Ibesikpo Asutan",
                "Ibiono-Ibom",
                "Ika",
                "Ikono",
                "Ikot Abasi",
                "Ikot Ekpene",
                "Ini",
                "Itu",
                "Mbo",
                "Mkpat-Enin",
                "Nsit-Atai",
                "Nsit-Ibom",
                "Nsit-Ubium",
                "Obot Akara",
                "Okobo",
                "Onna",
                "Oron",
                "Oruk Anam",
                "Udung-Uko",
                "Ukanafun",
                "Uruan",
                "Urue-Offong Oruko",
                "Uyo"
            ]
        },
        ----more
    }



SingleState list
=============

POST /api/v1/nigeria/state
---------------------

Retrieve a singlelist of all a states in Nigeria.


.. code-block:: javascript
    :class: custom-code-block

    const fetch = require('node-fetch');

    fetch('http://localhost:7000/api/v1/nigeria/state', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 'your-state-id'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
   

 Example Response  
.. code-block:: json



    {
    "message": "successfull",
    "cost": 0,
    "result": {
        "id": "abia",
        "name": "Abia",
        "region": "South East",
        "capital": "Umuahia",
        "deputy": "Ude Oko Chukwu",
        "governor": "Okezie Ikpeazu",
        "slogan": "God's Own State",
        "subRegion": [
            "Aba North",
            "Aba South",
            "Arochukwu",
            "Bende",
            "Ikwuano",
            "Isiala Ngwa North",
            "Isiala Ngwa South",
            "Isuikwuato",
            "Obi Ngwa",
            "Ohafia",
            "Osisioma",
            "Ugwunagbo",
            "Ukwa East",
            "Ukwa West",
            "Umuahia North",
            "muahia South",
            "Umu Nneochi"
        ]
    }
}


Region list
=============

POST /api/v1/nigeria/states/region
---------------------

Retrieve a region of all a states in Nigeria.


.. code-block:: javascript
    :class: custom-code-block

    const fetch = require('node-fetch');

    fetch('http://localhost:7000/api/v1/nigeria/states/region', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          region : "North Central"
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

        
   
Example Response
.. code-block:: json

   {

    "message": "successfull",
    "resultCount": 7,
    "cost": 0,
    "result": [
        {
            "id": "benue",
            "name": "Benue",
            "region": "North Central",
            "capital": "Makurdi",
            "deputy": "Benson Abounu",
            "governor": "Samuel Ortom",
            "slogan": "The Food Basket Of The Nation",
            "subRegion": [
                "Agatu",
                "Apa",
                "Ado",
                "Buruku",
                "Gboko",
                "Guma",
                "Gwer East",
                "Gwer West",
                "Katsina-Ala",
                "Konshisha",
                "Kwande",
                "Logo",
                "Makurdi",
                "Obi",
                "Ogbadibo",
                "Ohimini",
                "Oju",
                "Okpokwu",
                "Oturkpo",
                "Tarka",
                "Ukum",
                "Ushongo",
                "Vandeikya"
            ]
        },
        {
            "id": "kogi",
            "name": "Kogi",
            "region": "North Central",
            "capital": "Lokoja",
            "deputy": "Edward Onoja",
            "governor": "Yahaya Bello",
            "slogan": "The Confluence State",
            "subRegion": [
                "Adavi",
                "Ajaokuta",
                "Ankpa",
                "Bassa",
                "Dekina",
                "Ibaji",
                "Idah",
                "Igalamela Odolu",
                "Ijumu",
                "Kabba Bunu",
                "Kogi",
                "Lokoja",
                "Mopa Muro",
                "Ofu",
                "Ogori Magongo",
                "Okehi",
                "Okene",
                "Olamaboro",
                "Omala",
                "Yagba East",
                "Yagba West"
            ]
        },
        {
            "id": "kwara",
            "name": "Kwara",
            "region": "North Central",
            "capital": "Ilorin",
            "deputy": "Kayode Alabi",
            "governor": "Abdulrahman Abdulrazaq",
            "slogan": "The Place Of Harmony",
            "subRegion": [
                "Asa",
                "Baruten",
                "Edu",
                "Ekiti",
                "Ifelodun",
                "Ilorin East",
                "Ilorin South",
                "Ilorin West",
                "Irepodun",
                "Isin",
                "Kaiama",
                "Moro",
                "Offa",
                "Oke Ero",
                "Oyun",
                "Pategi"
            ]
        },
      
      ---more
      
    ]
}
   
.. _dsg-installation:

Replace the code examples with the appropriate usage for your API and programming language.

For more details on the API endpoints and available methods, refer to the API documentation provided below.

