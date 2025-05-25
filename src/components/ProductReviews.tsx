
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageCircle, User, CheckCircle, Filter } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
  region: string;
  occasion?: string;
  scentProfile: string[];
}

const ProductReviews = ({ productId }: { productId: string }) => {
  const { language, isRTL } = useLanguage();
  const [sortBy, setSortBy] = useState('recent');
  const [filterRating, setFilterRating] = useState('all');

  // Mock reviews data - in real app, this would come from API
  const reviews: Review[] = [
    {
      id: '1',
      author: isRTL ? 'أحمد المنصوري' : 'Ahmed Al Mansouri',
      rating: 5,
      title: isRTL ? 'عبق الأجداد يعود إلى الحياة' : 'The scent of ancestors comes alive',
      content: isRTL 
        ? 'هذا العطر ليس مجرد عطر، بل ذكرى عائلية. عندما أرتديه، أشعر بوجود جدي رحمه الله. جودة استثنائية وثبات مذهل.'
        : 'This is not just a fragrance, it\'s a family memory. When I wear it, I feel my grandfather\'s presence. Exceptional quality and amazing longevity.',
      date: '2024-01-15',
      verified: true,
      helpful: 23,
      region: isRTL ? 'دبي، الإمارات' : 'Dubai, UAE',
      occasion: isRTL ? 'المناسبات الخاصة' : 'Special occasions',
      scentProfile: isRTL ? ['عود', 'عنبر', 'ورد'] : ['Oud', 'Amber', 'Rose']
    },
    {
      id: '2',
      author: isRTL ? 'فاطمة الزهراني' : 'Fatima Al Zahrani',
      rating: 5,
      title: isRTL ? 'هدية ملكية حقيقية' : 'A truly royal gift',
      content: isRTL
        ? 'أهديته لزوجي في العيد، وقد أبهر جميع الحضور. العطر يتحدث عن الاحترام قبل أن ننطق بكلمة واحدة.'
        : 'I gifted this to my husband for Eid, and it impressed everyone present. The scent speaks of respect before we say a single word.',
      date: '2024-01-10',
      verified: true,
      helpful: 18,
      region: isRTL ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia',
      occasion: isRTL ? 'العيد' : 'Eid celebration',
      scentProfile: isRTL ? ['عود', 'صندل', 'مسك'] : ['Oud', 'Sandalwood', 'Musk']
    },
    {
      id: '3',
      author: isRTL ? 'خالد البلوشي' : 'Khalid Al Balushi',
      rating: 4,
      title: isRTL ? 'تجربة فاخرة ولكن...' : 'Luxurious experience but...',
      content: isRTL
        ? 'العطر رائع والجودة ممتازة، لكن السعر مرتفع قليلاً. مع ذلك، يستحق الاستثمار للمناسبات الخاصة.'
        : 'The fragrance is wonderful and the quality is excellent, but the price is a bit high. Nevertheless, it\'s worth the investment for special occasions.',
      date: '2024-01-08',
      verified: true,
      helpful: 12,
      region: isRTL ? 'مسقط، عمان' : 'Muscat, Oman',
      scentProfile: isRTL ? ['عود', 'زعفران'] : ['Oud', 'Saffron']
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    // In real app, this would trigger API call
  };

  const handleRatingFilter = (rating: string) => {
    setFilterRating(rating);
    // In real app, this would trigger API call
  };

  return (
    <section className="py-16 bg-faran-sandstone">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif text-faran-night mb-8 text-center">
            {isRTL ? "همسات التقدير" : "Whispers of Esteem"}
          </h2>
          <div className="w-20 h-0.5 bg-faran-gold mx-auto mb-8"></div>
        </motion.div>

        {/* Rating Summary */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="text-5xl font-bold text-faran-gold">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(averageRating) ? "fill-faran-gold text-faran-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-faran-charcoal">
                    {isRTL ? `${reviews.length} تقييم` : `${reviews.length} reviews`}
                  </p>
                </div>
              </div>
              <p className="text-faran-charcoal/80">
                {isRTL 
                  ? "تقييمات من عملاء حقيقيين يشاركون تجربتهم الأصيلة"
                  : "Reviews from real customers sharing their authentic experiences"}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-sm text-faran-charcoal w-8">
                    {rating} <Star size={12} className="inline" />
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-faran-gold h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(ratingDistribution[index] / reviews.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-faran-charcoal w-8">
                    {ratingDistribution[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-faran-gold" />
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="filter-dropdown px-4 py-2 text-sm focus:outline-none focus:ring-0"
            >
              <option value="recent">{isRTL ? "الأحدث" : "Most Recent"}</option>
              <option value="helpful">{isRTL ? "الأكثر إفادة" : "Most Helpful"}</option>
              <option value="rating">{isRTL ? "الأعلى تقييماً" : "Highest Rated"}</option>
            </select>
          </div>
          
          <select
            value={filterRating}
            onChange={(e) => handleRatingFilter(e.target.value)}
            className="filter-dropdown px-4 py-2 text-sm focus:outline-none focus:ring-0"
          >
            <option value="all">{isRTL ? "جميع التقييمات" : "All Ratings"}</option>
            <option value="5">{isRTL ? "5 نجوم فقط" : "5 Stars Only"}</option>
            <option value="4">{isRTL ? "4 نجوم فأكثر" : "4+ Stars"}</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-faran-gold/20 rounded-full flex items-center justify-center">
                    <User size={20} className="text-faran-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-faran-night">{review.author}</h4>
                      {review.verified && (
                        <CheckCircle size={16} className="text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-faran-charcoal/70">{review.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "fill-faran-gold text-faran-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-faran-charcoal/70">{review.date}</p>
                </div>
              </div>

              <h5 className="font-semibold text-faran-night mb-3">{review.title}</h5>
              <p className="text-faran-charcoal mb-4 leading-relaxed">{review.content}</p>

              {/* Scent Profile Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {review.scentProfile.map((note, noteIndex) => (
                  <span key={noteIndex} className="px-3 py-1 bg-faran-beige text-faran-charcoal text-sm rounded-full">
                    {note}
                  </span>
                ))}
                {review.occasion && (
                  <span className="px-3 py-1 bg-faran-gold/20 text-faran-gold text-sm rounded-full">
                    {review.occasion}
                  </span>
                )}
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-faran-beige">
                <button className="flex items-center gap-2 text-faran-charcoal hover:text-faran-gold transition-colors">
                  <ThumbsUp size={16} />
                  <span className="text-sm">
                    {isRTL ? "مفيد" : "Helpful"} ({review.helpful})
                  </span>
                </button>
                <button className="flex items-center gap-2 text-faran-charcoal hover:text-faran-gold transition-colors">
                  <MessageCircle size={16} />
                  <span className="text-sm">{isRTL ? "رد" : "Reply"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-faran-night mb-4">
              {isRTL ? "شارك تجربتك" : "Share Your Experience"}
            </h3>
            <p className="text-faran-charcoal/80 mb-6">
              {isRTL 
                ? "ساعد الآخرين في اكتشاف هذا العبق الأصيل من خلال مشاركة تجربتك"
                : "Help others discover this authentic fragrance by sharing your experience"}
            </p>
            <button className="btn-luxury">
              {isRTL ? "اكتب تقييماً" : "Write a Review"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductReviews;
