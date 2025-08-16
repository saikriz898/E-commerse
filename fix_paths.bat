@echo off
cd /d "c:\College\Projects\Ecomerse\products"

for %%f in (*.html) do (
    powershell -Command "(Get-Content '%%f') -replace 'asserts/', '../assets/' | Set-Content '%%f'"
    powershell -Command "(Get-Content '%%f') -replace 'href=\"shop.html\"', 'href=\"../shop.html\"' | Set-Content '%%f'"
    powershell -Command "(Get-Content '%%f') -replace 'href=\"index.html\"', 'href=\"../index.html\"' | Set-Content '%%f'"
    powershell -Command "(Get-Content '%%f') -replace 'href=\"blog.html\"', 'href=\"../blog.html\"' | Set-Content '%%f'"
    powershell -Command "(Get-Content '%%f') -replace 'href=\"about.html\"', 'href=\"../about.html\"' | Set-Content '%%f'"
    powershell -Command "(Get-Content '%%f') -replace 'href=\"contact.html\"', 'href=\"../contact.html\"' | Set-Content '%%f'"
)

echo All product pages have been updated!
pause