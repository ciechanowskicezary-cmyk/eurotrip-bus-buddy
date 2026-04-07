import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć co najmniej 2 znaki").max(100, "Imię może mieć maksymalnie 100 znaków"),
  phone: z.string().trim().min(6, "Podaj prawidłowy numer telefonu").max(20, "Numer telefonu jest za długi").regex(/^[\d\s\+\-()]+$/, "Numer może zawierać tylko cyfry, spacje i znaki + - ( )"),
  email: z.string().trim().email("Podaj prawidłowy adres email").max(255, "Email może mieć maksymalnie 255 znaków"),
  message: z.string().trim().min(10, "Wiadomość musi mieć co najmniej 10 znaków").max(2000, "Wiadomość może mieć maksymalnie 2000 znaków"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Zapytanie od ${data.name}`);
    const body = encodeURIComponent(
      `Imię: ${data.name}\nTelefon: ${data.phone}\nEmail: ${data.email}\n\nWiadomość:\n${data.message}`
    );
    window.location.href = `mailto:twojtransporter@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">Dziękujemy!</h3>
        <p className="text-muted-foreground mb-6">Twoja wiadomość została przygotowana do wysłania. Odpowiemy najszybciej jak to możliwe.</p>
        <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }}>
          Wyślij kolejne zapytanie
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-heading font-medium">Imię</FormLabel>
                <FormControl>
                  <Input placeholder="Jan Kowalski" {...field} />
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
                <FormLabel className="font-heading font-medium">Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="+48 600 000 000" {...field} />
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
              <FormLabel className="font-heading font-medium">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jan@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-heading font-medium">Opis zapytania</FormLabel>
              <FormControl>
                <Textarea placeholder="Opisz czego potrzebujesz — trasę, termin, liczbę osób..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold py-6 rounded-lg shadow-lg">
          <Send className="w-5 h-5 mr-2" />
          Wyślij zapytanie
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
