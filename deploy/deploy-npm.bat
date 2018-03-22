@ECHO OFF

REM -- Uncomment to Init NPM first run --
REM CALL ..\..\set-npm.bat

CD ..\

ECHO Linting...
CALL .\node_modules\.bin\eslint .\path-manager.js

ECHO Compiling JS...
CALL gulp

ECHO Publishing to NPM...
CALL npm publish deploy\build\