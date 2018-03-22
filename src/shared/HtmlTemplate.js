const HtmlTemplate = ({ body, title = 'React App' }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <script src="/bundle.js" defer></script>
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default HtmlTemplate;
