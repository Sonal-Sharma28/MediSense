function StatCard({
  title,
  value,
  subtitle,
  icon,
  valueColor = "text-slate-900",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${valueColor}`}>
            {value}
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            {subtitle}
          </p>

        </div>

        <div className="text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;