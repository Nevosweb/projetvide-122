import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Clock, Users, Mail, Phone, MessageSquare, Star, MapPin } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Define form schema
const reservationFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  date: z.date({
    required_error: "Veuillez sélectionner une date.",
  }),
  time: z.string({
    required_error: "Veuillez sélectionner une heure.",
  }),
  guests: z.string({
    required_error: "Veuillez indiquer le nombre de personnes.",
  }),
  message: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationFormSchema>;

const ReservationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Default values for the form
  const defaultValues: Partial<ReservationFormValues> = {
    date: new Date(),
  };

  // Initialize the form
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues,
  });

  // Define submit handler
  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    console.log(data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Réservation envoyée!",
      description: `Nous avons bien reçu votre demande pour le ${format(data.date, 'PPP', { locale: fr })} à ${data.time}.`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="text-white">
      {/* Header Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-japanGold" />
            <span className="text-sm font-medium text-white">Réservation en ligne</span>
            <Star className="w-4 h-4 text-japanGold" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Réservez votre{" "}
            <span className="bg-gradient-to-r from-japanRed to-japanGold bg-clip-text text-transparent">
              Table d'Exception
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vivez une expérience culinaire authentique dans l'art de la gastronomie japonaise. 
            Chaque réservation est une invitation au voyage des sens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-japanRed/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Service rapide</h3>
              <p className="text-gray-300 text-sm">Confirmation immédiate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-japanGold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Jusqu'à 8 personnes</h3>
              <p className="text-gray-300 text-sm">Groupes et familles</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-japanRed/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Expérience unique</h3>
              <p className="text-gray-300 text-sm">Ambiance authentique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Informations de réservation
                  </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200 font-medium">
                            Nom complet
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom complet" 
                              {...field} 
                              className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-japanGold focus:ring-japanGold/20 rounded-lg" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200 font-medium">
                                Téléphone
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="06 12 34 56 78" 
                                  {...field} 
                                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-japanGold focus:ring-japanGold/20 rounded-lg" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                  
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200 font-medium">
                              Adresse email
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="votre@email.com" 
                                type="email" 
                                {...field} 
                                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-japanGold focus:ring-japanGold/20 rounded-lg" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  
                      {/* Message Field */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200 font-medium">
                              Message (optionnel)
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Demandes spéciales, allergies, préférences..." 
                                {...field} 
                                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-japanGold focus:ring-japanGold/20 rounded-lg min-h-[100px]" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-japanRed to-japanGold hover:from-japanRed/90 hover:to-japanGold/90 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Envoi en cours...
                          </div>
                        ) : (
                          'Confirmer la réservation'
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Informations pratiques
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-japanGold mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Adresse</p>
                        <p className="text-gray-300 text-sm">123 Rue de la Paix<br />75001 Paris</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-japanGold mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Horaires</p>
                        <p className="text-gray-300 text-sm">Déjeuner: 12h00 - 14h00<br />Dîner: 19h00 - 22h00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-japanGold mt-0.5" />
                      <div>
                        <p className="font-medium text-white">Contact</p>
                        <p className="text-gray-300 text-sm">01 23 45 67 89</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="font-medium text-white mb-2">À savoir</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Réservation recommandée</li>
                      <li>• Annulation gratuite 24h avant</li>
                      <li>• Menu végétarien disponible</li>
                      <li>• Parking à proximité</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default ReservationSection;
