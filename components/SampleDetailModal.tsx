
import React from 'react';
import { X, Info, Tag, Layers, Camera, Zap } from 'lucide-react';

interface SampleDetailModalProps {
  sample: any;
  onClose: () => void;
}

const SampleDetailModal: React.FC<SampleDetailModalProps> = ({ sample, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-purple-100">
        {/* Left: Image */}
        <div className="md:w-3/5 bg-gray-950 flex items-center justify-center relative group">
          <img src={sample.url} alt="Detail" className="max-w-full max-h-[80vh] object-contain" />
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${sample.isGenerated ? 'bg-indigo-600' : 'bg-purple-600'}`}>
              {sample.isGenerated ? '生成样本' : '采集样本'}
            </span>
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:w-2/5 p-10 space-y-8 bg-[#FCFAFF]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-gray-800 tracking-tight">样本详情</h3>
              <p className="text-sm text-purple-400 font-medium">#{sample.id}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-purple-50 rounded-full transition-colors text-purple-300 hover:text-purple-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <InfoItem icon={<Tag className="w-4 h-4" />} label="样本类型" value={sample.type} />
            <InfoItem icon={<Layers className="w-4 h-4" />} label="标签信息" value={sample.tag} />
            <InfoItem icon={<Camera className="w-4 h-4" />} label="采集模式" value="自动触发" />
            <InfoItem icon={<Zap className="w-4 h-4" />} label="相机增益" value="2.4x" />
          </div>

          <div className="pt-8">
            <button onClick={onClose} className="w-full py-3.5 bg-purple-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
              关闭预览
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-purple-50">
    <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default SampleDetailModal;
