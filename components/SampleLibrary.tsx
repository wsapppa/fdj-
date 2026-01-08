
import React, { useState } from 'react';
import { Search, ChevronDown, Monitor, Activity, Workflow, Grid, List, MapPin } from 'lucide-react';
import SampleDetailModal from './SampleDetailModal';

const SampleLibrary: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('V6-TwinTurbo-01');
  const [selectedSite, setSelectedSite] = useState('缸盖侧壁-01');
  const [activeSample, setActiveSample] = useState<any>(null);

  const engineList = [
    { type: '柴油发动机', model: 'V6-TwinTurbo-01' },
    { type: '柴油发动机', model: 'V6-TwinTurbo-02' },
    { type: '汽油发动机', model: 'Inline4-Eco-05' },
    { type: '混动总成', model: 'Hybrid-Core-X-03' },
  ];

  const samples = Array.from({ length: 15 }).map((_, i) => ({
    id: `SMP-${1000 + i}`,
    url: `https://picsum.photos/seed/engine-${i}/300/200`,
    isGenerated: i > 8,
    type: i > 8 ? '负样本' : '正样本',
    tag: i > 8 ? '表面划痕' : '正常'
  }));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 h-full flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">样本库</h1>
        <p className="text-sm text-gray-500 mt-1">管理全量检测点位采集及合成的样本资源。</p>
      </header>

      {/* Filter Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center"><Monitor className="w-3 h-3 mr-1.5" /> 设备类型</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-gray-50 rounded-xl text-sm appearance-none pr-10 outline-none border border-transparent focus:border-purple-300">
                <option>全部设备</option>
                <option>柴油发动机</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center"><Activity className="w-3 h-3 mr-1.5" /> 缺陷类型</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-gray-50 rounded-xl text-sm appearance-none pr-10 outline-none border border-transparent focus:border-purple-300">
                <option>全部状态</option>
                <option>正常</option>
                <option>表面划痕</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center"><Workflow className="w-3 h-3 mr-1.5" /> 工艺环节</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-gray-50 rounded-xl text-sm appearance-none pr-10 outline-none border border-transparent focus:border-purple-300">
                <option>全部工艺</option>
                <option>喷漆表面</option>
                <option>焊接</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-sm outline-none border border-transparent focus:border-purple-300" placeholder="搜索样本编号..." />
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
        {/* Left: Engine Model List */}
        <div className="col-span-3 bg-white rounded-3xl shadow-sm border border-purple-100 flex flex-col overflow-hidden">
          <div className="p-4 bg-purple-50/50 border-b border-purple-100 flex items-center justify-between">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">型号列表</span>
            <List className="w-4 h-4 text-purple-400" />
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {engineList.map((engine, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedModel(engine.model)}
                className={`w-full text-left p-4 rounded-2xl transition-all ${selectedModel === engine.model ? 'bg-purple-600 text-white shadow-lg' : 'hover:bg-purple-50 text-gray-600'}`}
              >
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${selectedModel === engine.model ? 'text-purple-200' : 'text-purple-400'}`}>{engine.type}</p>
                <p className="text-sm font-bold truncate">{engine.model}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Site Thumbnail Grid */}
        <div className="col-span-9 bg-white rounded-3xl shadow-sm border border-purple-100 flex flex-col overflow-hidden">
          <div className="p-4 bg-purple-50/50 border-b border-purple-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-purple-600" />
              <select 
                className="bg-transparent text-sm font-bold text-purple-900 outline-none cursor-pointer"
                value={selectedSite}
                onChange={(e) => setSelectedSite(e.target.value)}
              >
                <option>缸盖侧壁-01</option>
                <option>密封面边缘</option>
                <option>曲轴箱接口</option>
              </select>
            </div>
            <Grid className="w-4 h-4 text-purple-400" />
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {samples.map((sample) => (
                <div 
                  key={sample.id}
                  onClick={() => setActiveSample(sample)}
                  className="group relative aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all border border-purple-50"
                >
                  <img src={sample.url} alt="Sample" className="w-full h-full object-cover group-hover:opacity-90" />
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    <span className={`px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase tracking-tighter text-white shadow-sm ${sample.isGenerated ? 'bg-indigo-600' : 'bg-purple-600'}`}>
                      {sample.isGenerated ? '生成' : '采集'}
                    </span>
                    <span className="bg-black/60 backdrop-blur-sm text-[8px] text-white px-1.5 py-0.5 rounded-md font-medium">{sample.tag}</span>
                  </div>
                  <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeSample && <SampleDetailModal sample={activeSample} onClose={() => setActiveSample(null)} />}
    </div>
  );
};

export default SampleLibrary;
