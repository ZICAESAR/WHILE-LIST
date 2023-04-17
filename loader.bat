@echo off
setlocal
:menu
cls
title .
echo ::===============================================================
echo Menu
echo 1 ADD
echo 2 ADDHWID
echo 3 RANDOM
echo 4 REMOVE
echo 5 RESETHWID
echo 6 OPENSERVER
echo ::===============================================================
set /p choice=Menu^>
if %choice%==1 goto njs1
if %choice%==2 goto njs2
if %choice%==3 goto njs3
if %choice%==4 goto njs4
if %choice%==5 goto njs5
if %choice%==6 goto njs6

:njs1
echo Fetching data...
node ./function/add.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b

:njs2
echo Fetching data...
node ./function/addhwid.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b

:njs3
echo Fetching data...
node ./function/random.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b

:njs4
echo Fetching data...
node ./function/remove.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b

:njs5
echo Fetching data...
node ./function/resethwid.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b

:njs6
echo Fetching data...
node ./function/openserver.js
set /p choice=Go Back To Menu^> 
if %choice%==y goto menu
if %choice%==n exit /b