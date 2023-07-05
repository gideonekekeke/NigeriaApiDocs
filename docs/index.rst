.. .. _index:

.. ****************************************
.. NigeriaState API Documentation
.. ****************************************

.. .. meta::
..     :description: This is the official documentation for the Nigeria API developed by Gideon Ekeke.
..     :keywords: NigeriaState API, Documentation

.. .. _dsg-introduction:

.. Introduction
.. ============

.. This documentation provides details on how to use the NigeriaState API, developed by Gideon Ekeke.
.. The API allows developers to access information about Nigerian states, regions, and subregions.
.. We provide examples, including API endpoints and their expected responses, for both visual and technical reference.

.. The source code of this API is located in its `project repository on GitHub <https://github.com/gideonekekeke/NigeriaApiDocs>`_.

.. If you want to use another programming language to consume this API, follow the examples provided below.


.. State list
.. =============

.. GET /api/v1/nigeria/state
.. ---------------------

.. Retrieve a list of all the states in nigeria.

.. .. tabs::

..    .. tab:: Stars

..       .. tabs::

..          .. tab:: The Sun

..             The closest star to us.

..          .. tab:: Proxima Centauri

..             The second closest star to us.

..          .. tab:: Polaris

..             The North Star.

..    .. tab:: Moons

..       .. tabs::

..          .. tab:: The Moon

..             Orbits the Earth

..          .. tab:: Titan

..             Orbits Jupiter


.. .. tabs::
..    .. tab:: bash

..       # Example request in Bash
..       import requests

..       url = 'https://readthedocs.org/api/v3/projects/'
..       token = '<token>'
..       headers = {'Authorization': f'token {token}'}
..       response = requests.get(url, headers=headers)
..       print(response.json())

..    .. tab:: python

..       # Example request in Python
..       import requests

..       url = 'https://readthedocs.org/api/v3/projects/'
..       token = '<token>'
..       headers = {'Authorization': f'token {token}'}
..       response = requests.get(url, headers=headers)
..       print(response.json())





.. Example response:

.. .. code-block:: json

..     {
..         "count": 25,
..         "next": "/api/v3/projects/?limit=10&offset=10",
..         "previous": null,
..         "results": [{
..             "id": 12345,
..             "name": "Pip",
..             "slug": "pip",
..             "created": "2010-10-23T18:12:31+00:00",
..             "modified": "2018-12-11T07:21:11+00:00",
..             "language": {
..                 "code": "en",
..                 "name": "English"
..             },
..             "programming_language": {
..                 "code": "py",
..                 "name": "Python"
..             }
..         }]
..     }


.. .. _dsg-installation:


.. Replace the code examples with the appropriate usage for your API and programming language.

.. For more details on the API endpoints and available methods, refer to the API documentation provided below.

.. .. _dsg-api-documentation:

.. API Documentation
.. =================

.. For detailed information on the Nigeria API, including API endpoints, request parameters, and response formats, refer to the official API documentation:

.. - `API Documentation <https://nigeria-api-docs.com>`_



.. _index:

****************************************
NigeriaState API Documentation
****************************************

.. meta::
    :description: This is the official documentation for the Nigeria API developed by Gideon Ekeke.
    :keywords: NigeriaState API, Documentation

.. _dsg-introduction:

Introduction
============

This documentation provides details on how to use the NigeriaState API, developed by Gideon Ekeke.
The API allows developers to access information about Nigerian states, regions, and subregions.
We provide examples, including API endpoints and their expected responses, for both visual and technical reference.

The source code of this API is located in its `project repository on GitHub <https://github.com/gideonekekeke/NigeriaApiDocs>`_.

If you want to use another programming language to consume this API, follow the examples provided below.


State list
=============

GET /api/v1/nigeria/state
---------------------

Retrieve a list of all the states in Nigeria.


.. code-block:: 

         # Example request in Node.js
         const fetch = require('node-fetch');

         fetch('http://localhost:7000/api/v1/nigeria/state')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))



            
.. code-block:: json

    {
        "count": 25,
        "next": "/api/v3/projects/?limit=10&offset=10",
        "previous": null,
        "results": [{
            "id": 12345,
            "name": "Pip",
            "slug": "pip",
            "created": "2010-10-23T18:12:31+00:00",
            "modified": "2018-12-11T07:21:11+00:00",
            "language": {
                "code": "en",
                "name": "English"
            },
            "programming_language": {
                "code": "py",
                "name": "Python"
            }
        }]
    }



Region list
=============

GET /api/v1/nigeria/state
---------------------

Retrieve a list of all the states in Nigeria.


.. code-block:: 

         # Example request in Node.js
         const fetch = require('node-fetch');

         fetch('http://localhost:7000/api/v1/nigeria/state')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

   
   
   
   
.. _dsg-installation:

Replace the code examples with the appropriate usage for your API and programming language.

For more details on the API endpoints and available methods, refer to the API documentation provided below.
























































































