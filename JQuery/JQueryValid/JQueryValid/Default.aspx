<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="JQueryValid._Default" %>

<html>
<head runat="server">
    <title>JQuery-Valid</title>

    <script src="JavaScript/CommonJavaScript.js" type="text/javascript"></script>

    <script src="JavaScript/jquery.min.js" type="text/javascript"></script>

    <script type="text/javascript" language="javascript">
        $(document).ready(function() {
            $("button").click(function() {
                $("p").hide();
            });
            $("button").dblclick(function() {
                $("p").show();
            });
        });
    </script>

</head>
<body>
    <form id="form1" runat="server">
    <p>
        Show This message...!
    </p>
    <button>OK</button>
    <input type="button" id="btn" value="OK" />
    </form>
</body>
</html>
