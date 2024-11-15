Jak działa aplikacja

Aplikacja odczytuje zawartość pliku input.txt, a następnie łączy się z OpenAI i wysyła treść pliku input.txt do OpenAI z odpowiednim promptem, który przekształca tekst
na format HTML. Prompt ten generuje strukturę HTML zawierającą jedynie sekcję body z dodanymi odpowiednimi tagami, przyciskami oraz innymi elementami w estetycznym 
układzie.

Otrzymaną odpowiedź zapisujemy do pliku artykul.html. Mamy również przygotowany plik szablon.html, który zawiera stylizację CSS oraz kod JavaScript odpowiedzialny za 
finalną prezentację strony. W efekcie, po skopiowaniu sekcji body z artykul.html do szablon.html, uzyskamy kompletną, ostylowaną stronę.i właśnie plik podglad.html 
jest połączeniem artykul.html oraz szablon.html , podglad.html prezentuje nam pełną strone.

Jak odpalić aplikację

Aby uruchomić aplikację, należy w pliku articleGenerator.mjs w 13 linijce kodu wpisać swój kod API 
(swój kod api należy wpisać w apostrofy np. tak 'skj-3425' tuż po apiKey: ) 
ewentualnie można w 4 linijce kodu zamienić wartość zmiennej na swoją nazwe zmiennej środowiskowej a następnie w 13 linijce kodu zamienić  yourApiKey na swoją nazwe
zmiennej środowiskowej a następnie należy otworzyć terminal i wpisać następującą komendę 
node articleGenerator.mjs 
Po wpisaniu komendy należy chwilę poczekać, aż aplikacja zwróci odpowiedź na prompt i utworzy lub nadpisze plik artykul.html.







