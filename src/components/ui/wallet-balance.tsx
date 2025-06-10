
import { Eye, EyeOff, Wallet } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WalletBalanceProps {
  balance: number;
  currency?: string;
}

const WalletBalance = ({ balance, currency = "₹" }: WalletBalanceProps) => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className="green-gradient text-white p-6 mx-4 mb-6 green-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Wallet size={20} className="text-white" />
          <span className="text-white/90 text-sm font-medium">Wallet Balance</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowBalance(!showBalance)}
          className="text-white hover:bg-white/20 p-1"
        >
          {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
        </Button>
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold">
          {showBalance ? `${currency}${balance.toLocaleString()}` : "****"}
        </div>
        <p className="text-white/80 text-sm">Available Balance</p>
      </div>
      
      <div className="flex space-x-3 mt-4">
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          Add Money
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          Transfer
        </Button>
      </div>
    </Card>
  );
};

export default WalletBalance;
