# API POINTS




## ARTIKEL
### Menampilkan seluruh artikel
```
GET: /artikel
response:
[
  {
    "id"        : "",
    "judul"     : "",
    "desc"      : "",
    "tanggal"   : "",
    "img"       : "",
    "konten"    : ""
  },
  {
    ...
  }
]
```
### Menampilkan artikel berdasarkan ```id```
```
GET: /artikel/[id]
response:
{
    "id"        : "",
    "judul"     : "",
    "desc"      : "",
    "tanggal"   : "",
    "img"       : "",
    "konten"    : ""
}
```
### Menambahkan artikel
```
POST: /artikel
data:
{

    "judul"     : "",
    "desc"      : "",
    "tanggal"   : "",
    "img"       : "",
    "konten"    : ""
}
response:
true    //if true
false   //if false
```
### Mengubah artikel
```
PUT: /artikel
data:
{

    "judul"     : "",
    "desc"      : "",
    "tanggal"   : "",
    "img"       : "",
    "konten"    : ""
}
response:
true    //if true
false   //if false
```
### Menghapus artikel
```
DELETE: /artikel
response:
true    //if true
false   //if false
```


## USER
### Menampilkan user
```
GET: /user
response:
[
  {
    "id"          : "",
    "hai"         : "",
    "desc"        : "",
    "desc2"       : ""
  },
  {
    ...
  }
]
```
### Menampilkan data user media berdasarkan ```id```
```
GET: /user/[id]
response:
{
    "id"          : "",
    "hai"         : "",
    "desc"        : "",
    "desc2"       : ""
}
```
### Menambahkan data user
```
POST: /user
data:
{
    "hai"         : "",
    "desc"        : "",
    "desc2"       : ""
}
response:
true    //if true
false   //if false
```

### Mengubah data user
```
PUT: /user
data:
{
    "hai"         : "",
    "desc"        : "",
    "desc2"       : "" 
}
response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /user/[id]
response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/firoos18/tekweb2022/main/assets/img/Database%20Design.png)
