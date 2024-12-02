Jak działa aplikacja

Aplikacja odczytuje zawartość folderu input, a następnie łączy się z OpenAI i wysyła treści z folderu input do OpenAI z odpowiednim promptem, który przekształca tekst
na format HTML. Prompt ten generuje strukturę HTML zawierającą jedynie sekcję body z dodanymi odpowiednimi tagami, przyciskami oraz innymi elementami w estetycznym 
układzie.

Otrzymaną odpowiedź zapisujemy do folderu artykul. Mamy również przygotowany plik szablon.html, który zawiera stylizację CSS oraz kod JavaScript odpowiedzialny za 
finalną prezentację strony. W efekcie, po skopiowaniu sekcji body z artykul.html do szablon.html, uzyskamy kompletną, ostylowaną stronę.i właśnie plik podglad.html 
jest połączeniem artykul.html oraz szablon.html , podglad.html prezentuje nam pełną strone.

Jak odpalić aplikację

1. Zainstaluj Node.js
Przejdź na stronę Node.js, pobierz najnowszą wersję LTS (Long Term Support) i zainstaluj ją na swoim komputerze.
Po instalacji sprawdź, czy Node.js jest poprawnie zainstalowany. Otwórz terminal i wpisz:
node -v (powinno wyświetlić wersję Node.js)
npm -v (powinno wyświetlić wersję npm)

2. Stwórz nowy folder na projekt
Utwórz folder, w którym będzie przechowywany Twój projekt.

3. Inicjalizuj nowy projekt Node.js
Otwórz terminal, przejdź do folderu, który utworzyłeś, a następnie zainicjuj projekt Node.js:
cd C:/projekty/ai-html-generator (przejdź do folderu projektu).
npm init -y (spowoduje to utworzenie pliku package.json w Twoim projekcie).

4. Zainstaluj wymagane pakiety
W folderze projektu zainstaluj bibliotekę OpenAI, używając następującej komendy:
npm install openai
Biblioteka ta będzie potrzebna do komunikacji z API OpenAI.

5. Załóż konto na OpenAI i uzyskaj klucz API
Zarejestruj się na stronie OpenAI.
Po rejestracji przejdź do sekcji API Keys, aby uzyskać swój klucz API. Skopiuj ten klucz.

6. Utwórz plik .env w folderze projektu
W folderze projektu utwórz plik .env (jeśli jeszcze go nie masz) i wstaw do niego swój klucz API:
OPENAI_API_KEY= twój_klucz_api
Zamiast twój_klucz_api, wklej skopiowany klucz API.

7. Utwórz plik JavaScript z kodem aplikacji
W folderze projektu utwórz plik o nazwie app.js (lub dowolną inną nazwę).
Wklej do niego kod aplikacji (np. kod, który generuje HTML na podstawie plików tekstowych).

8. Stwórz foldery na pliki wejściowe i wyjściowe
W folderze projektu utwórz dwa foldery:
input — folder na pliki tekstowe .txt, które będą przetwarzane przez aplikację.
artykul — folder na wygenerowane pliki HTML.

9. Dodaj pliki wejściowe
W folderze teksty umieść pliki tekstowe .txt, które chcesz przetworzyć.

10. Uruchom aplikację
Otwórz terminal w folderze projektu i uruchom aplikację:
node app.js
Aplikacja rozpocznie przetwarzanie plików tekstowych z folderu teksty i zapisze wygenerowane pliki HTML w folderze artykul.

11. Sprawdź wyniki
Po uruchomieniu aplikacji sprawdź folder artykul. Powinny tam znajdować się pliki .html wygenerowane na podstawie plików tekstowych w folderze teksty.

12. Gotowe!
Aplikacja powinna działać poprawnie, generując pliki HTML na podstawie tekstów. Jeśli napotkasz jakiekolwiek problemy, sprawdź komunikaty w terminalu, które mogą wskazać przyczynę błędu.