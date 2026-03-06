import { Award, TrendingUp, MapPin, Star } from "lucide-react";

const stars = Array.from({ length: 5 });

const TrustBadgesRow = () => (
  <section className="relative z-10 -mt-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Badge 1 - Rating */}
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-0.5 mb-3">
              {stars.map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-white mb-1">4.9/5.0</div>
            <div className="text-sm text-slate-400">Client Rating</div>
          </div>

          {/* Badge 2 - Meta Partner */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-sky-400" />
            </div>
            <div className="text-base font-semibold text-white mb-1">Meta Business</div>
            <div className="text-sm text-slate-400">Certified Partner</div>
          </div>

          {/* Badge 3 - Projects */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-sky-400" />
            </div>
            <div className="text-base font-semibold text-white mb-1">100+ Projects</div>
            <div className="text-sm text-slate-400">Delivered</div>
          </div>

          {/* Badge 4 - Location */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-sky-400" />
            </div>
            <div className="text-base font-semibold text-white mb-1">Denver, CO</div>
            <div className="text-sm text-slate-400">Locally Owned</div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default TrustBadgesRow;
