<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فروشگاه فایل</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .file-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        .file-item {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 300px;
            text-align: center;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .file-item img {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
        }
        .file-item h3 {
            margin: 10px 0;
            font-size: 18px;
            color: #555;
        }
        .file-item a {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .file-item a:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>فروشگاه فایل</h1>
        <asp:Repeater ID="FileRepeater" runat="server">
            <ItemTemplate>
                <div class="file-list">
                    <div class="file-item">
                        <img src='<%# Eval("Thumbnail") %>' alt="File Thumbnail">
                        <h3><%# Eval("Name") %></h3>
                        <a href='https://wa.me/<%# Eval("WhatsAppNumber") %>?text=<%# Eval("WhatsAppMessage") %>' target="_blank">
                            خرید فایل
                        </a>
                    </div>
                </div>
            </ItemTemplate>
        </asp:Repeater>
    </div>
</body>
</html>
