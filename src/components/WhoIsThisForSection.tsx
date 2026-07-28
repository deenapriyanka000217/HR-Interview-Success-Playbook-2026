import React from 'react';
import { AUDIENCE_PERSONAS } from '../data/playbookData';
import { UserCheck, GraduationCap, BookOpen, Award, TrendingUp, Briefcase, CheckCircle2 } from 'lucide-react';

export const WhoIsThisForSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#FFD700]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#FFD700]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#FFD700]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#FFD700]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#FFD700]" />;
      default: return <Briefcase className="w-5 h-5 text-[#FFD700]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Target Audience Fit</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Is This Playbook Right for You?
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Specifically written for ambitious candidates looking to break into or excel in Human Resources.
          </p>
        </div>

        {/* 6 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE_PERSONAS.map((persona, idx) => (
            <div
              key={idx}
              className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#001B3D] rounded-xl border border-blue-400/20">
                    {getIcon(persona.iconName)}
                  </div>
                  <span className="text-[11px] font-extrabold text-[#001B3D] bg-[#FFD700] px-2.5 py-0.5 rounded-full">
                    {persona.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {persona.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {persona.description}
                </p>
              </div>

              <div className="pt-2 border-t border-blue-800 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Relevant Preparation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
