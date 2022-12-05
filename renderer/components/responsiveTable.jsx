const ResponsiveTable = ({ headers, rows, border }) => {
  return (
    <div className="flex-grow w-full h-[30vh] py-3 md:py-5 lg:py-6 relative overflow-y-scroll pr-2">
      <table className="w-full text-center text-xl lg:text-3xl">
        <tbody>
          <tr>
            {headers.map((header) => (
              <th className={border? "border" : ""}>{header}</th>
            ))}
          </tr>
          {rows.map((row) => row.map((cell) => <th className={border? "border font-normal" : "font-normal"}>{cell}</th>))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
