```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nota y envía el formulario

    browser->>browser: JavaScript previene el envío por defecto
    browser->>browser: La nota se agrega al estado local y se renderiza

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: La página no se recarga
