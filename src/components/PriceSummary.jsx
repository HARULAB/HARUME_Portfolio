const PriceSummary = ({
  totalPrice,
  productionLevel,
}) => {
  const descriptions = {
    standard: "基本的なカット編集とシンプルなアニメーションを中心とした構成です。",
    advanced: "高度なモーショングラフィックスや複雑なエフェクトを加え、視覚的な魅力を高めます。",
    premium: "3DCGや高度なエフェクト、複雑なモーショングラフィックスを駆使した最高峰のクオリティです。",
  };

  return (
    <div className="pt-8 text-[var(--text-primary)] text-left">
      <div className="space-y-4 border-t border-[var(--border-color)]/20 pt-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xl md:text-2xl font-bold">¥</span>
          <span className="text-6xl md:text-8xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
            {totalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-bold opacity-30 tracking-widest uppercase">JPY</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
