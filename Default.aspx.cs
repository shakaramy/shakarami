using System;
using System.Collections.Generic;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            // لیست فایل‌ها
            var files = new List<FileModel>
            {
                new FileModel
                {
                    Name = "فایل شماره ۱",
                    Thumbnail = "https://via.placeholder.com/300x150",
                    WhatsAppNumber = "1234567890",
                    WhatsAppMessage = "سلام! من علاقه‌مند به خرید فایل شماره ۱ هستم."
                },
                new FileModel
                {
                    Name = "فایل شماره ۲",
                    Thumbnail = "https://via.placeholder.com/300x150",
                    WhatsAppNumber = "1234567890",
                    WhatsAppMessage = "سلام! من علاقه‌مند به خرید فایل شماره ۲ هستم."
                },
                new FileModel
                {
                    Name = "فایل شماره ۳",
                    Thumbnail = "https://via.placeholder.com/300x150",
                    WhatsAppNumber = "1234567890",
                    WhatsAppMessage = "سلام! من علاقه‌مند به خرید فایل شماره ۳ هستم."
                }
            };

            FileRepeater.DataSource = files;
            FileRepeater.DataBind();
        }
    }

    public class FileModel
    {
        public string Name { get; set; }
        public string Thumbnail { get; set; }
        public string WhatsAppNumber { get; set; }
        public string WhatsAppMessage { get; set; }
    }
}
